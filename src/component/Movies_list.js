import React, { Component } from 'react'
import '../style/movies.css'

class Movies_list extends Component{
	constructor(){
		super()
		this.onDate = this.onDate.bind(this) // 날짜 구하는 함수
		this.getDatas = this.getDatas.bind(this) // 날짜에 해당하는 정보 가져옴
		this.addComma = this.addComma.bind(this) // 금액에 세자리 수마다 ','추가
		this.getRenderMovies = this.getRenderMovies.bind(this) // 영화 리스트 렌더링 배열 생성
	}
	getDatas(r_date){// 날짜에 해당하는 정보 가져옴
		const { updateLoading, updateResponse } = this.props
		const xml = new XMLHttpRequest()
		const date = r_date.value.split('-').reduce(
					(date, v) => date + v
				,'')

		updateLoading(1) // 로딩중

		xml.onreadystatechange = () => {
			if(xml.readyState === 4 && xml.status === 200){
				const json_response = JSON.parse(xml.responseText)
				if(json_response.boxOfficeResult.dailyBoxOfficeList.length){
					updateResponse(json_response)
					updateLoading(0) // 로딩끝
				}else{
					updateLoading(2) // 잘못된 선택
				}
			}
		}

		xml.open('GET', `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f76ee7e94a042c35e7c647982e5e0906&targetDt=${date}&itemPerPage=10`)
		xml.send(null)
	}
	onDate(e){ // 날짜 구하는 함수
		const { r_date } = this.refs
		const { getDatas } = this

		if(r_date.value){
			getDatas(r_date)
		}
		e.preventDefault()
	}
	addComma(numbers){ // 금액에 세자리 수마다 ',' 붙임
		const arr = Array.from(numbers)
		const comma_numbers = []

		for(let i=0;i<arr.length;i++){
			(i !== 0 && i%3 === 0) ?
			comma_numbers.push(arr[arr.length-1-i] + ',') :
			comma_numbers.push(arr[arr.length-1-i])
		}

		return comma_numbers.reverse()
	}
	getRenderMovies(){ // 영화 리스트 렌더링 배열 생성
		const { addComma } = this
		const { response } = this.props
		const render_names = response.boxOfficeResult.dailyBoxOfficeList.map(
							(v, i) =>
							<figure key={i}>
								<wrapper>
									<div id="image"><img src={require('../images/popcorn.jpg')}/></div>
									<section className="movie_content">
											<p>{v.rank}.{v.movieNm}</p>
											<section className="movie_content_details">
												<div>
													<p>당일 매출액 - <span>{addComma(v.salesAmt)}원</span></p>
													<p>누적 매출액 - <span>{addComma(v.salesAcc)}원</span></p>
													<p>당일 관객수 - <span>{addComma(v.audiCnt)}명</span></p>
												</div>
												<div>
													<p>누적 관객수 - <span>{addComma(v.audiAcc)}명</span></p>
													<p>당일 스크린수 - <span>{addComma(v.scrnCnt)}관</span></p>
													<p>당일 상영횟수 - <span>{addComma(v.showCnt)}번</span></p>
												</div>
											</section>
									</section>
								</wrapper>
							</figure>
						)
		return render_names
	}
	render(){
		const { loading } = this.props
		const { onDate, getRenderMovies } = this
		let render_names

		if(loading === 0){ //로딩 끝
			render_names = getRenderMovies()
		}

		return(
			<div className="movies">
				<div className="search">
					<form onClick={(e) => false}>
						일별 박스오피스 검색 : <input type="date" ref="r_date" required/>
						<button onClick={onDate}>search</button>
						<button onClick={(e) => {e.preventDefault(); window.history.back()}}>Go Back</button>
					</form>
				</div>
				{
					(loading === -1) ? '날짜를 선택해주세요' :
					(loading === 1) ? 'loading...' :
					(loading === 2) ? '잘못된 날짜를 선택하셨습니다.' :
					<div className="movies_list">
						{render_names}
					</div>
				}
			</div>
		)
	}
}

export default Movies_list

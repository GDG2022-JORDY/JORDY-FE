import styles from './mainPage.module.scss'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MainPage() {
  const navigate = useNavigate()

  const [searchText, setSearchText] = useState('')
  const [selectOption, setSelectOption] = useState()

  const handleTextChange = (e) => {
    setSearchText(e.currentTarget.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSelect = (e) => {
    setSelectOption(e.currentTarget.value)
  }

  const handleClickTr = () => {
    navigate('/write/1')
  }
  return (
    <div className={styles.mainPage}>
      메인페이지
      <div>
        옵션, 검색
        <select name='sports' value={selectOption} onChange={handleSelect}>
          <option value='ALL'>전체</option>
          <option value='soccer'>축구</option>
          <option value='basketball'>농구</option>
          <option value='baseball'>야구</option>
          <option value='etc'>기타</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input type='text' value={searchText} onChange={handleTextChange} placeholder='검색어를 입력하세요.' />
          <button type='submit'>검색</button>
        </form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>종목</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleClickTr}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr onClick={handleClickTr}>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

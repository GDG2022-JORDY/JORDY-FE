/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.module.scss'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiFillEnvironment, AiFillFire, AiFillCloud, AiFillFile } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { dummyContents } from '../../dummyData'

function Writepage() {
  const { postId } = useParams()
  return <div className='writepage'>{postId !== '' ? <Showwrite /> : <Write />}휴</div>
}

function Showwrite() {
  const { postId } = useParams()
  const temp = ['장소', '종목', '날짜', '친밀도']
  const icons = [<AiFillEnvironment />, <AiFillFire />, <AiFillCloud />, <AiFillFile />]
  const postContent = dummyContents.filter((el) => `${el.id}` === postId)
  return (
    <div className='showwirte'>
      <h4>{postContent[0].title}</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>글쓴이</td>
            <td>{postContent[0].writer}</td>
          </tr>
          <tr>
            <td>글 작성일</td>
            <td>{postContent[0].date}</td>
          </tr>
        </tbody>
      </Table>
      <div
        className='list'
        onChange={() => {
          setNum(1)
        }}
      >
        {['place', 'event', 'date', 'friendly'].map((el, index) => {
          const key = `list_${index}`
          return (
            <div className={el} key={key}>
              {icons[index]}
              <p>{temp[index]}</p>
              <p>{postContent[0][el]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
function Write() {
  return (
    <div
      className='write'
      onChange={() => {
        setNum(0)
      }}
    >
      <label>제목</label>
      <input type='text' />
      <select>
        <option>전체</option>
        <option>축구</option>
        <option>농구</option>
        <option>야구</option>
      </select>
      <label>만날장소</label>
      <input type='text' />
      <label>만날날짜</label>
      <input type='date' />
    </div>
  )
}

export default Writepage

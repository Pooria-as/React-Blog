import React from 'react'
import styled from 'styled-components'

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any Question ?</h2>
      <span>FAQ</span>
      <Question>
        <h4>How do I start?</h4>
        <div className='answer'>
          <p>testetste tets ts tets</p>
          <p>
            testetste tets ts tets testetste tets ts tets testetste tets ts tets
          </p>
        </div>
      </Question>
      <div className='faq-line'></div>
      <Question>
        <h4>How do I start?</h4>
        <div className='answer'>
          <p>testetste tets ts tets</p>
          <p>
            testetste tets ts tets testetste tets ts tets testetste tets ts tets
          </p>
        </div>
      </Question>
      <div className='faq-line'></div>

      <Question>
        <h4>How do I start?</h4>
        <div className='answer'>
          <p>testetste tets ts tets</p>
          <p>
            testetste tets ts tets testetste tets ts tets testetste tets ts tets
          </p>
        </div>
      </Question>
      <div className='faq-line'></div>

      <Question>
        <h4>How do I start?</h4>
        <div className='answer'>
          <p>testetste tets ts tets</p>
          <p>
            testetste tets ts tets testetste tets ts tets testetste tets ts tets
          </p>
        </div>
      </Question>
    </Faq>
  )
}

const Faq = styled.div`
  margin: 0rem 5rem;
  width: 80%;
  .faq-line {
    width: 100%;
    height: 0.2rem;
    background-color: #ffff;
  }
  h2 {
    color: white;
    font-size: 3rem;
  }
  span {
    color: green;
    font-size: 2rem;
  }
`

const Question = styled.div`
  width: 100%;
  height: 17vh;
  margin: 2rem 0rem;

  h4 {
    font-size: 1.5rem;
    color: white;
  }
  p {
    color: white;
    font-size: 1.4rem;
  }
`
export default FaqSection

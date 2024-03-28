const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1>Congratulations</h1>
    <div className='card-container'>
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <div>
        <h1>Kiran V</h1>
        <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      </div>
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

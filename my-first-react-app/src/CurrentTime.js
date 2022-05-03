const CurrentTime = () => {
    return (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    )
    // root.render(element)
    
}

// const EverySecond = () => setInterval(currentTime, 1000)


export default CurrentTime
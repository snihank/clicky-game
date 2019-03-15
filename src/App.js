import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main, { } from './components/Main/Main';
import Footer from './components/Footer/Footer';
import imageList from './components/Images/images';
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    imageList: imageList,
    imageClicked: [],
    message: ''
  }

  // Shuffle the imageList array
  shuffleImages = (array) => {
    let currentIndex = array.length;
    while (currentIndex > 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      let tempIndex = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempIndex;
    }
    this.setState({ imageList: array });
  }

  // This function handles click event on images
  handleClick = (image) => {
    this.scoreIncrement()
    if (this.state.imageClicked.indexOf(image) === -1) {
      this.scoreIncrement();
      this.setState((state, props) => ({
        imageClicked: [...state.imageClicked, image]
      }))
    } else {
      this.gameReset();
    }

  }

  // This function handles the score and also shuffles the images in imagelist
  scoreIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: 'Guessed right'
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore })
    }
    this.shuffleImages(imageList);
  };

  // GameReset starts the game again after user clicked the same image twice
  gameReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      imageClicked: [],
      message: 'Clicked the same image twice'
    });
    this.shuffleImages(imageList);
  }


  render() {


    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        {this.state.imageList.map((e, index) => {
          // console.log('>>>>', e);
          return (
            <Main
              image={e}
              id={index}
              handleClick={this.handleClick}
            />

          )
        })
        }

        <Footer />
      </div>


    );

  }
}

export default App;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fade from '@material-ui/core/Fade';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';

import Button1 from './img/button1.png';
import Button2 from './img/button2.png';
import Button3 from './img/button3.png';
import Button4 from './img/button4.png';
import Button5 from './img/button5.png';
import Button6 from './img/button6.png';
import Button7 from './img/button7.png';
import Pekin from './img/pekin.jpg';
import Final from './img/final.png';

import Q1 from './img/q1.jpg';
import Q2 from './img/q2.jpeg';
import Q3 from './img/q3.jpeg';
import Q4 from './img/q4.jpeg';
import Q5 from './img/q5.jpeg';
import Q6 from './img/q6.jpg';
import Q7 from './img/q7.jpg';
import Q8 from './img/q8.jpg';
import Q9 from './img/q9.jpg';
import Q10 from './img/q10.jpg';
import Q11 from './img/q11.jpeg';
import Q12 from './img/q12.jpg';
import Q13 from './img/q13.jpeg';
import Q14 from './img/q14.jpg';
import Q15 from './img/q15.jpeg';

import MainImg from './img/main.png';
import Age from './img/age.jpg';

import {questions} from './questions';

import './App.css';
import './pyro.css';

const imageMapping = {
  q1: Q1,
  q2: Q2,
  q3: Q3,
  q4: Q4,
  q5: Q5,
  q6: Q6,
  q7: Q7,
  q8: Q8,
  q9: Q9,
  q10: Q10,
  q11: Q11,
  q12: Q12,
  q13: Q13,
  q14: Q14,
  q15: Q15,
}

const finalSlides = [
  ({ onClick }) => <div>
    <Typography align="center" className="responsiveText">
      Вы талантливый спортсмен, профессиональный финансист, любимый внук, сын, племянник, муж и отец, успешный бизнесмен, НО…
    </Typography>
    <button className='button' size="large" onClick={onClick}>
      <img src={Button3} className='buttonImage' alt="Next" />
    </button>
  </div>,
  ({ onClick }) => <div>
    <Typography align="center" className="responsiveText">
      …в душе вы все еще ребенок, который при первой же возможности бежит играть в Call of Duty  на PlayStation
    </Typography>
    <button className='button' size="large" onClick={onClick}>
      <img src={Button4} className='buttonImage' alt="Next" />
    </button>
  </div>,
  ({ onClick }) => <div>
    <img src={Age} className="imgWithBorder" alt="age" />
    <Typography align="center" className="responsiveText">
      Ваш реальный возраст – 5 лет
    </Typography>

    <button className='button' size="large" onClick={onClick}>
      <img src={Button5} className='buttonImage' alt="Next" />
    </button>
  </div>,
  ({ onClick }) => <div>
    <Typography align="center" className="responsiveText">
      Удивительная особенность каждого ребенка – это способность и желание мечтать. И у вас была мечта – мечта побывать в Китае. Мечты должны сбываться!
    </Typography>

    <button className='button' size="large" onClick={onClick}>
      <img src={Button6} className='buttonImage' alt="Next" />
    </button>
  </div>,
  ({ onClick }) => <div>
    <img src={Pekin} className="imgWithBorder" alt="pekin" />
    <Typography align="center" className="responsiveText">
      Сегодня вас ждет чудесный отдых в Пекине!
    </Typography>

    <button className='button' size="large" onClick={onClick}>
      <img src={Button7} className='buttonImage' alt="Next" />
    </button>
  </div>,
  () => <Typography align="center" className="responsiveText">
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <img style={{ width: '100%' }} src={Final} alt="happy birthday!"/>
  </Typography>,
];

const Slider = () => {
  const [currentslide, setSlide] = React.useState(0);
  const [isShown, setIsShown] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsShown(true), 500);
  }, [currentslide]);

  const handleNextClick = () => {
    if (finalSlides[currentslide + 1]) {
      setIsShown(false);
      setTimeout(() => setSlide((oldSlide) => oldSlide + 1), 300);
    }
  }

  const Component = finalSlides[currentslide];

  return <Fade in={isShown}>
    <Component onClick={handleNextClick} />
  </Fade>
}

const useStyles = makeStyles((theme) => ({
  roundedButton: {
    borderRadius: 30,
  },
  button: {
    background: 'transparent',
    border: 'none',
    width: 300,
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto'
  },
  buttonImage: {
    width: '100%'
  },
  welcomeText: {
    fontSize: 20
  },
  controlLabel: {
    fontSize: 18,
    lineHeight: 1.2,
  }
}));

const QuestionCard = ({
  question,
  options,
  index,
  onSubmit,
  isLastQuestion,
}) => {
const [value, setValue] = React.useState('');
const [isShown, setIsShown] = React.useState(false)
const [isError, setIsError] = React.useState(false)
const handleChange = (event) => {
  setValue(event.target.value);
};
setTimeout(() => setIsShown(true), 100);
const styles = useStyles();
return (
  <Fade in={isShown}>
    <Card variant="outlined">
      <CardContent>
        <Typography style={{marginBottom: 20}} variant="h5">{question}</Typography>
        {isError ? <Alert severity="error" style={{marginBottom: 20}}>Не торопитесь, слушайте свое сердце</Alert> : null}
        <FormControl component="fieldset" fullWidth>
          <RadioGroup name={`question${index}`} value={value} onChange={handleChange}>
            {options.map((item, index) => <FormControlLabel style={{ marginBottom: 10 }} classes={{label: styles.controlLabel}} key={index} value={item.label} control={<Radio />} label={item.label} />)}
          </RadioGroup>
          <Button className={styles.roundedButton} disabled={!value} onClick={() => {
            const key = Object.values(options).find(option => option.label === value).key

            if(key) {
              setIsError(false)
              onSubmit(value);
              setValue('')
            } else {
              setIsError(true)
            }
          }} fullWidth style={{marginTop: 20}} variant="outlined" color="primary">
            { isLastQuestion ? 'Получить коктейль!' : 'Проверить' }
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  </Fade>
  )
}

const STATUSES = {
  init: 'init',
  welcome: 'welcome',
  comment: 'comment',
  question: 'question',
  result: 'result'
}


const theme = createMuiTheme({
  typography: {
    fontFamily: "'Crimson Text', serif",
    lineHeight: 1,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': "'Crimson Text', serif",
      },
    },
  },
});

const Comment = ({ currentQuestion, handleNextSlide, setStatus, classes }) => {
  const [isShown, setIsShown] = React.useState(false)

  setTimeout(() => setIsShown(true), 100);
  return <Fade in={isShown}>
    <div className="welcomeScreen">
      <img className="imgWithBorder" style={{width: '100%'}} src={imageMapping[questions[currentQuestion].img]} alt="main-img"/>
      <p className={classes.welcomeText}>{questions[currentQuestion].comment}</p>
      <Button size="large" onClick={() => {handleNextSlide(() => setStatus(STATUSES.question))}} className={classes.roundedButton} variant="contained" color="secondary">
        Продолжить
      </Button>
    </div>
  </Fade>
}

function App() {
  const questionNumber = questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [status, setStatus] = React.useState(STATUSES.init);

  const handleNextSlide = (cb = () => {}) => {
    if (currentQuestion === questionNumber -1) {
      setStatus(STATUSES.result);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    cb();
  }

  const isLastQuestion = currentQuestion === questionNumber -1;

  const classes = useStyles();

  return (
    <div >
      <div className={'hiddenImages'}>
        {[...Object.values(imageMapping), MainImg, Final, Button1, Button2, Button3, Button4, Button5, Button6, Button7].map((image, index) => <img key={`${image}_${index}`} src={image} alt={image} />)}
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          {
            status === STATUSES.question &&
              <QuestionCard isLastQuestion={isLastQuestion} index={currentQuestion} onSubmit={() => setStatus(STATUSES.comment)} {...questions[currentQuestion]}/>
          }
          {
            status === STATUSES.init &&
              <div className="welcomeScreen">
                <img className="imgWithBounceAnimation" style={{width: '100%'}} src={MainImg} alt="main-img"/>
                <button className={classes.button} size="large" onClick={() => setStatus(STATUSES.welcome)}>
                  <img src={Button1} className={classes.buttonImage} alt="Хочу узнать" />
                </button>
              </div>
          }
          {
            status === STATUSES.welcome &&
              <div className="welcomeScreen">
                <p className={classes.responsiveText}>Данный тест поможет определить ваш реальный возраст. Постарайтесь отвечать на вопросы быстро и долго не задумываясь над ними. Помните, лишь сердце подскажет правильный вариант ответа.</p>
                <button className={classes.button} size="large" onClick={() => setStatus(STATUSES.question)}>
                  <img src={Button2} className={classes.buttonImage} alt="Начать" />
                </button>
              </div>
          }
          {
            status === STATUSES.comment &&
              <Comment classes={classes} currentQuestion={currentQuestion} handleNextSlide={handleNextSlide} setStatus={setStatus} />
          }
          {
            status === STATUSES.result && <div className="finalScreen">
              <Slider />
            </div>
          }
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import LoginForm from './pages/login-form/LoginForm';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <Card
        name='Sydney'
        phone='111-1111-111'
        email='amir@gmail.com'
        image={
          {
            url: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fdk-find-out%2Fimage%2Fupload%2Fq_70%2Cc_pad%2Cw_1200%2Ch_630%2Cf_auto%2FDCTM_Penguin_UK_DK_AL697473_RGB_PNG_namnse.jpg&imgrefurl=https%3A%2F%2Fwww.dkfindout.com%2Fuk%2Fanimals-and-nature%2Fcats%2Fwhat-is-cat%2F&tbnid=6Q6_EcSSvA4vgM&vet=12ahUKEwjkn87LsYz7AhVHaBoKHVG4CmgQMygKegUIARDQAQ..i&docid=F3CARXjHt7pZSM&w=1200&h=630&q=cat&ved=2ahUKEwjkn87LsYz7AhVHaBoKHVG4CmgQMygKegUIARDQAQ`,
            alt: 'cute cat'
          }
        }
        favoured={false}

      />
    </div>
  );
}

export default App;

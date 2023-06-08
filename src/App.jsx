
import Button from './components/button/Button';
import Counter from './components/counter/Counter';

const App = () => {

	return(
		<>
			<Counter/>
			<Button action={()=> console.log('click')}/>
		</>
		
		
	);
	
};


export default App;

import MonthlyCalendar from './components/MonthlyCalendar/MonthlyCalendar';
import WeekView from './components/WeekView/WeekView';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <section className='calendar-main-container'>
         <MonthlyCalendar />
        </section>
        <section className='week-main-container'>
          <WeekView />
        </section>
      </div>
    </div>
  );
}

export default App;

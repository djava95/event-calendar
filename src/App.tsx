import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootStore } from './services/Store'; 
import { setEventsData, getEventsData } from './services/actions/EventActions';
import MonthlyCalendar from './components/MonthlyCalendar/MonthlyCalendar';
import WeekView from './components/WeekView/WeekView';
import './App.scss';

function App() {
  const dispatch = useDispatch<any>();
  const events = useSelector((state: IRootStore) => state.events.events); 
  const changed = useSelector((state: IRootStore) => state.events.changed);

  useEffect(()=> {
    dispatch(getEventsData())
  },[])

  useEffect(()=>{
    if (changed) {
      setEventsData(events);
    }
  },[events]);

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

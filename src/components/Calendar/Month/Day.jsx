import { useEffect, useRef, useState } from 'react';
import { Day, DayCell, DayPercent } from './Month.styled';
import CalendarModal from '../Modal/CalendarModal';

const DayComponent = ({ calendarRef, day, waterPercentage }) => {
  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = () => {
    setActiveModal(prevModal => (prevModal === day ? null : day));
  };

  return (
    <DayCell key={day}>
      <div>
        {activeModal === day && (
          <CalendarModal
            key={day}
            calendarRef={calendarRef}
            refData={ref}
            waterData={waterPercentage}
          />
        )}
      </div>
      <Day
        ref={ref}
        onClick={() => toggleModal(day)}
        $isOutlineVisible={!waterPercentage || waterPercentage.percent < 100}
      >
        {day}
      </Day>
      <DayPercent>
        {waterPercentage ? `${Math.min(waterPercentage.percent, 100)}%` : '0%'}
      </DayPercent>
    </DayCell>
  );
};

export default DayComponent;

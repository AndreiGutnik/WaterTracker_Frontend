import { CalendarModalStyles } from './CalendarModal.styled';

const CalendarModal = ({ calendarRef, refData, waterData = {} }) => {
  const { dayOfMonth, waterRate, percent, numberRecords } = waterData;

  const currentRef = refData?.current.getBoundingClientRect().left;
  const containerRef = calendarRef?.current.getBoundingClientRect().left;

  let position = true;

  const delta = currentRef - containerRef;
  if (delta < 250) {
    position = false;
  }

  return (
    <CalendarModalStyles $delta={position} $deltaNum={delta}>
      {Object.values(waterData).length ? (
        <>
          <h3>{dayOfMonth}</h3>
          <p>
            Daily norma: <span>{waterRate / 1000} L</span>
          </p>
          <p>
            Fulfillment of the daily norm:{' '}
            <span>{percent > 100 ? 100 : percent}%</span>
          </p>
          <p>
            How many servings of water: <span>{numberRecords}</span>
          </p>
        </>
      ) : (
        <h3>You don't have records of this day.</h3>
      )}
    </CalendarModalStyles>
  );
};

export default CalendarModal;

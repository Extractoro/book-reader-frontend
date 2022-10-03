import s from '../MyTrainingPlaying.module.css';

const MyTrainingPlayingComponent = ({ library }) => {
  return (
    <>
      {library.map(({ title, _id }) => (
        <option className={s.option} key={_id} id={_id}>
          {title}
        </option>
      ))}
    </>
  );
};

export default MyTrainingPlayingComponent;

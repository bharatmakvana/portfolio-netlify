const Pre = ({ load }: { load: boolean }) => {
  return <div className={`preloader ${!load ? 'preloader-none': ''}`}></div>;
}

export default Pre;

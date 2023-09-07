const LapFunc = (time: number) => {
  const fminutes = Math.floor(time / 6000);
  const fseconds = Math.floor((time / 100) % 60);
  const fmilliseconds = time % 100;

  const formattedMinutes = fminutes < 10 ? `0${fminutes}` : fminutes;
  const formattedSeconds = fseconds < 10 ? `0${fseconds}` : fseconds;
  const formattedMilliseconds =
    fmilliseconds < 10 ? `0${fmilliseconds}` : fmilliseconds;

  return `${formattedMinutes}:${formattedSeconds},${formattedMilliseconds}`;
};

export default LapFunc;

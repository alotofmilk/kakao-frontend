type TitleText = {
  title: string;
  subtitle?: string;
};

const Title = (text: TitleText) => {
  const { title, subtitle } = text;
  return (
    <>
      <h1>{title}</h1>
      <hr></hr>
      {subtitle !== undefined && <h3>{subtitle}</h3>}
    </>
  );
};

export default Title;

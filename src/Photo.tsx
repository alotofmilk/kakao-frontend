type Phototype = {
  address: string;
  description: string;
};

const Photo = (props: Phototype) => {
  const { address } = props;
  const { description } = props;
  return (
    <>
      <img src={address} />
      <article>{description}</article>
      
    </>
  );
};

export default Photo;

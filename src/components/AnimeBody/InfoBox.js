const InfoBox = ({ title, data }) => {
  return (
    <div className="btn btn-block btn-sm md:btn-lg btn-secondary cursor-default">
      <p className="text-sm">
        {title} {data}
      </p>
    </div>
  );
};

export default InfoBox;

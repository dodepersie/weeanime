const InfoBox = ({ title, data }) => {
  return (
    <div className="bg-base-200 border-2 border-base-300 rounded-lg p-2">
      <p className="text-center font-bold">
        {title}: {data}
      </p>
    </div>
  );
};

export default InfoBox;

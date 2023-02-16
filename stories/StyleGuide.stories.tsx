export default {
  title: "StyleGuide",
};

export const StyleGuide = () => {
  return (
    <div className="p-20">
      <div>
        <h2 className="mb-20">Colors</h2>
        <div className="flex space-x-20">
          <div>
            <div className="w-120 h-120 bg-white mb-10 border border-black/10" />
            <span>white</span>
          </div>
          <div>
            <div className="w-120 h-120 bg-blue mb-10" />
            <span>blue</span>
          </div>
          <div>
            <div className="w-120 h-120 bg-blue-medium mb-10" />
            <span>medium blue</span>
          </div>
          <div>
            <div className="w-120 h-120 bg-blue-dark mb-10" />
            <span>dark blue</span>
          </div>
          <div>
            <div className="w-120 h-120 bg-blue-darker mb-10" />
            <span>darker blue</span>
          </div>
        </div>
      </div>
      <div>
        <span className="body-lg">title</span>
      </div>
    </div>
  );
};

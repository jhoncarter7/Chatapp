export const GenderCheckbox = ({passingGender, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected": ''}`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-600" 
          checked={selectedGender === "male"}
          onChange={() => passingGender("male")} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected": ''}`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-600"
          checked={selectedGender === "female"}
          onChange={() => passingGender("female")}/>
        </label>
      </div>
    </div>
  );
};

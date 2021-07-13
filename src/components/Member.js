import React from "react";

const Member = (props) => {
  const { team, member, onChange } = props;

  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <>
      <label>
        <input
          type="text"
          className={team}
          value={member}
          onChange={handleChange}
        ></input>
      </label>
      <input name={team} type="radio" value={member}></input>
    </>
  );
};

export default Member;

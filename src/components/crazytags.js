import React, { useState, useEffect, useCallback, useRef, Component } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { addEssentials } from "./redux/AddEssentials";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    potlucks: state.ActionsReduced.PotlucksReducer,
    essentials: state.ActionsReduced.EssentialsReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddEssentials: (potluckTitle, essential) => dispatch(addEssentials(potluckTitle, essential)),
  };
};

// Tagify settings object
const baseTagifySettings = {
  blacklist: [],
  whitelist: [
    { value: "sour cream", searchBy: "cream, sour" },
    { value: "guacamole", searchBy: "guac, avocado" },
    {
      value: "hummus",
      searchBy: "houmous, hoummos, homous, houmos, houmus, humus",
    },
    { value: "barbeque and coals", searchBy: "barbeque, bbq" },
    { value: "barbeque without coals", searchBy: "barbeque, bbq" },
  ],
  maxTags: 50,
  //backspace: "edit",
  placeholder: "type something",
  dropdown: {
    enabled: 1, // a;ways show suggestions dropdown
  },
};


function CrazyTags(props) {
  const handleSubmit = (potluckTitle, essentials) => {
    props.handleAddEssentials(potluckTitle, essentials);
  };

  const tagifyRef1 = useRef();

  // just a name I made up for allowing dynamic changes for tagify settings on this component
  const [tagifySettings] = useState([]);
  const [tagifyProps, setTagifyProps] = useState({});

  // on component mount
  useEffect(() => {
    setTagifyProps({ loading: true });

    setTagifyProps((lastProps) => ({
      ...lastProps,
      showFilteredDropdown: "a",
      loading: false,
    }));

    // simulate state change where some tags were deleted
    setTimeout(
      () =>
        setTagifyProps((lastProps) => ({
          ...lastProps,
          defaultValue: [""],
          showFilteredDropdown: false,
        })),
      5000
    );
  }, []);

  // merged tagify settings (static & dynamic)
  const settings = {
    ...baseTagifySettings,
    ...tagifySettings,
  };

  const onChange = useCallback((e) => {
    console.log(
      "Essentials: ",
      e.detail.tagify.value.map((test) => {
        return test.value;
      })
    );
    handleSubmit(props.potlucks.length,
      e.detail.tagify.value.map((test) => {
        return test.value;
      })
    );
  }, []);

  return (
    <>
      <Tags
        className="form-control"
        tagifyRef={tagifyRef1}
        settings={settings}
        defaultValue=""
        placeholder="Essentials..."
        autoFocus={true}
        {...tagifyProps}
        onChange={onChange}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CrazyTags);

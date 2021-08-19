import React, {useState, useEffect, useCallback, useRef, useMemo} from 'react'
import Tags from '@yaireo/tagify/dist/react.tagify'

/////////////////////////////////////////////////

// Tagify settings object
const baseTagifySettings = {
  blacklist: [],
  whitelist: [
    { value:'sour cream', searchBy:'cream, sour' },
    { value:'guacamole', searchBy:'guac, avocado' },
    { value:'hummus', searchBy:'houmous, hoummos, homous, houmos, houmus, humus' },
    { value:'barbeque and coals', searchBy:'barbeque, bbq' },
    { value:'barbeque without coals', searchBy:'barbeque, bbq' },


  ],
  maxTags: 50,
  //backspace: "edit",
  placeholder: "type something",
  dropdown: {
    enabled: 1 // a;ways show suggestions dropdown
  }
}

// this is an example React component which implemenets Tagify within
// itself. This example is a bit elaborate, to demonstrate what's possible.
const CrazyTags = () => {
  const tagifyRef1 = useRef()

  // just a name I made up for allowing dynamic changes for tagify settings on this component
  const [tagifySettings, setTagifySettings] = useState([])
  const [tagifyProps, setTagifyProps] = useState({})

  // on component mount
  useEffect(() => {
    setTagifyProps({loading: true})


      setTagifyProps((lastProps) => ({
        ...lastProps,
        showFilteredDropdown: "a",
        loading: false
      }))
 

    // simulate state change where some tags were deleted
    setTimeout(
      () =>
        setTagifyProps((lastProps) => ({
          ...lastProps,
          defaultValue: [""],
          showFilteredDropdown: false
        })),
      5000
    )
  }, [])

  // merged tagify settings (static & dynamic)
  const settings = {
    ...baseTagifySettings,
    ...tagifySettings
  }

  const onChange = useCallback(e => {
    //console.log(e.detail.tagify.value)
    console.log("Essentials: ", e.detail.tagify.value.map(test => {return (test.value)}))
  }, [])

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
        onChange={onChange} />
    </>
  )
}

export default CrazyTags
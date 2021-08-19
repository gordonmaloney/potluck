import React, {useState, useEffect, useCallback, useRef, useMemo} from 'react'
import Tags from '@yaireo/tagify/dist/react.tagify'

/////////////////////////////////////////////////

// Tagify settings object
const baseTagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  //backspace: "edit",
  placeholder: "type something",
  dropdown: {
    enabled: 0 // a;ways show suggestions dropdown
  }
}

// this is an example React component which implemenets Tagify within
// itself. This example is a bit elaborate, to demonstrate what's possible.
const CrazyTags = () => {
  const tagifyRef1 = useRef()
  const tagifyRefDragSort = useRef()

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
          defaultValue: ["abc"],
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
    console.log("CHANGED:", e.detail.value)
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

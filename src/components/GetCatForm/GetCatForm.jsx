import Select from 'react-select'
import { loadTags } from '../../api'
import { useEffect, useState } from 'react'
import s from './GetCatForm.module.css'

function GetCatForm (props) {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isLoadingTags, setIsLoadingTags] = useState(false)
  useEffect(() => {
    if (!options.length) {
      setIsLoadingTags(true)
      loadTags()
        .then(tags => {
          const options = tags.map(tag => {
            return { value: tag, label: tag }
          })
          setOptions(options)
        })
        .finally(() => {
          setIsLoadingTags(false)
        })
    }
  }, [])

  const onButtonClick = (e) => {
    props.handleSubmit(selectedOptions.length ? selectedOptions.map(o => o.value) : [])
  }

  return (
    <div className={s.form}>
      <Select
        onChange={setSelectedOptions}
        options={options}
        name={'tags'}
        isMulti={true}
        isDisabled={props.blocked || isLoadingTags}
      />
      <button onClick={onButtonClick} disabled={props.blocked || isLoadingTags} className={s.button}>Find a cat</button>
    </div>
  )
}

export default GetCatForm

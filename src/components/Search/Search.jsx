import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box  } from "@material-ui/core"

function Search() {
  return (
    <div className='search'>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="simple-select-label">Şehir</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          
          label="Age"
          
        >
          <MenuItem >Ten</MenuItem>
          <MenuItem >Twenty</MenuItem>
          <MenuItem >Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </div>
  )
}

export default Search
import {decode} from 'jsonwebtoken'

export const validarToken = token =>{
  const tokenErr = "invalido"
  const tokenDef = token ? token : localStorage.getItem('token')
  if(!tokenDef){
    return tokenErr
  }
  if (decode(tokenDef).exp > (new Date() / 1000)) {
    return tokenErr
  }
}

import { AnchorAtom, BoxContainer, BrandAtom, ButtonAtom, ButtonBigAtom, ButtonFlavorAtom, ContainerAtom, FlexContainer, ImgAtom, ImgAtomTwo, NumberAtom, RowAtom, SectionAtom, SectionGlassAtom, SmallAtom, TextAtom, TitleAtom } from '../../atoms'
import casperIcon from '../../assets/heroIMG.png'
import casperHero from '../../assets/heroIMG.png'
import { useState } from 'react'
import { supabase } from '../../supabase'
import { InputAtom } from '../../atoms/InputAtom'

export function Landing() {

  const [email, emailSetter] = useState('')
  function onWrite(e: any) {
    e.preventDefault()
    emailSetter(e.target.value)
  }
  const validateEmail = (mail: any) => {
    return String(mail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  async function Submit(e: any) {
    e.preventDefault()
    if (validateEmail(email)) {
      const { data, error } = await supabase
        .from('signups')
        .insert([
          { email: email }
        ])
      alert("Gracias por confirmar tu correo")
    }
    else {
      alert("Ingrese un correo valido")
    }
    emailSetter("")
  }

  return (
    <ContainerAtom>
      <RowAtom>
        <BrandAtom>
          <img src="https://www.kaufmann.cl/o/kaufmann-general-theme/images/kaufmann/kaufmann.svg" alt="Logo Kauffman" width="200" />
          
        </BrandAtom>
      </RowAtom>

      <SectionAtom>
        <ImgAtom>
          <img src={casperHero} alt="logo casper" width="500" />
          
        </ImgAtom>
        <TitleAtom>Expondremos nuestro nuevo ecosistema y responderemos todas sus inquietudes sobre contratos actuales y futuros</TitleAtom>
        <ImgAtomTwo>
          <InputAtom onWrite={onWrite} value={email} />
          <ButtonAtom onSubmit={Submit}>Inscribirme</ButtonAtom>
        </ImgAtomTwo>

      </SectionAtom>
    </ContainerAtom>
  )
}
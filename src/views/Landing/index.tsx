import { AnchorAtom, BoxContainer, BrandAtom, ButtonAtom, ButtonBigAtom, ButtonFlavorAtom, ContainerAtom, FlexContainer, ImgAtom, ImgAtomTwo, NumberAtom, RowAtom, SectionAtom, SectionGlassAtom, SmallAtom, TextAtom, TitleAtom } from '../../atoms'
import casperIcon from '../../assets/casperIcon.svg'
import casperHero from '../../assets/heroImage.png'
import { useState } from 'react'
import { supabase } from '../../supabase'
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
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
      alert("Thanks for signing up!")
    }
    else {
      alert("Please enter a valid email")
    }
    emailSetter("")
  }

  return (
    <ContainerAtom>
      <RowAtom>
        <BrandAtom>
          <img src={casperIcon} alt="logo casper" width="30" />
          <p>Casper Swap</p>
        </BrandAtom>
      </RowAtom>

      <SectionAtom>
        <TitleAtom>Next-generation DeFi Built on the Casper Blockchain</TitleAtom>
        <SmallAtom>Coming soon</SmallAtom>
        <ImgAtom>
          <img src={casperHero} alt="logo casper" width="300" />
        </ImgAtom>
        <ImgAtomTwo>
          <InputAtom onWrite={onWrite} value={email} />
          <ButtonAtom onSubmit={Submit}>Sign up for updates</ButtonAtom>
        </ImgAtomTwo>

        <TextAtom>
          <AnchorAtom href="https://twitter.com/casperswap" target="_blank"><FaTwitter size="3rem" /></AnchorAtom>
          <AnchorAtom href="https://twitter.com/casperswap" target="_blank"><FaDiscord size="3rem" /></AnchorAtom>
          <AnchorAtom href="https://twitter.com/casperswap" target="_blank"><FaTelegram size="3rem" /></AnchorAtom>
        </TextAtom>
      </SectionAtom>
    </ContainerAtom>
  )
}
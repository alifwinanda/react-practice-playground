import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { fetchDigimon } from "../../../store/reducers/digimon"
import DigimonCard from "../../../components/DigimonCard"
import styled from "@emotion/styled"

const CardListWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const SandboxDans = () => {
  const dispatch = useAppDispatch()
  const { digimonList, loading } = useAppSelector((state) => state.digimon)

  useEffect(() => {
    dispatch(fetchDigimon())
  }, [])

  return (
    <div>
      <h1>Digimon List</h1>
      {!loading ? (
        <CardListWrapper>
          {digimonList?.map((key) => {
            return <DigimonCard image={key.image} name={key.name} />
          })}
        </CardListWrapper>
      ) : (
        "loading"
      )}
    </div>
  )
}

export default SandboxDans

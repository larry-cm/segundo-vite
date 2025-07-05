import Card from '@/components/Details/GifInfo/Card'
import InfoCreador, { HeaderCreador } from '@/components/Details/GifInfo/InfoCreador/CreatorInfo'
export default function InfoGif ({ singleGif }) {
  const { userInfo, username, title, info, frames } = singleGif || {}
  const viewHeaderCreator = username || userInfo?.avatarUrl || userInfo?.viewName
  return (
    <>
      {
        (viewHeaderCreator) && (
          <Card>
            <HeaderCreador
              username={username}
              userInfo={userInfo}
            />
          </Card>
        )
      }
      <Card>
        <InfoCreador infoUser={{ info, username, title, frames }} />
      </Card>
    </>
  )
}

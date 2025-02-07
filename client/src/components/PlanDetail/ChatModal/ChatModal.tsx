import { useEffect, useRef } from 'react'
import styles from './ChatModal.module.scss'
import Icon from '../../Common/Icon'
import { ChatModalProps } from '../../../types/planDetailTypes'

function ChatModal({
  userId,
  chatList,
  newChat,
  onChatModalFalse,
  onChatChange,
  onChatSubmit,
}: ChatModalProps) {
  const scrollContainerRef = useRef(null)

  // 리스트 갱신 시 스크롤 맨 아래로
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as HTMLElement | null
    if (!scrollContainer) {
      return
    }
    const { scrollHeight } = scrollContainer
    scrollContainer.scrollTo(0, scrollHeight)
  }, [chatList])

  return (
    <div className={styles.background}>
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <h1>그룹 채팅</h1>
          <button type='button' onClick={onChatModalFalse}>
            <Icon name='x' size={18} />
          </button>
        </div>
        <div className={styles.chatBody} ref={scrollContainerRef}>
          {chatList?.map(chat => (
            <div
              className={chat.userId === userId ? styles.loggedInUser : styles.notLoggedInUser}
              key={chat.id}
            >
              {chat.userId === userId ? (
                <span>{chat.message}</span>
              ) : (
                <>
                  <div className={styles.profileBox}>
                    {chat.profileImgUrl ? (
                      <img src={chat.profileImgUrl} alt='profile' />
                    ) : (
                      <Icon name='profile' size={24} />
                    )}
                  </div>
                  <div className={styles.messageContent}>
                    <span>{chat.userNickname}</span>
                    <span>{chat.message}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <form className={styles.chatFooter} onSubmit={onChatSubmit}>
          <input
            type='text'
            className={styles.chatInput}
            placeholder='메시지를 입력하세요'
            value={newChat}
            onChange={onChatChange}
          />
          <button type='submit' className={styles.sendButton}>
            send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatModal

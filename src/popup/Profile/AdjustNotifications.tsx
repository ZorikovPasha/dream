import React from 'react'

interface IProps {
  close: () => void
  goTo: (path: string) => void
}

export const AdjustNotifications = ({ goTo, close }: IProps) => {
  const getBooleanValueFromLocalstorage = (name: string, defaultValue: boolean) => {
    if (!window) {
      return defaultValue
    }

    const value = window.localStorage.getItem(name)
    if (value === null) {
      return defaultValue
    }

    return value === 'true'
  }
  const [inAppPush, setInAppPush] = React.useState(getBooleanValueFromLocalstorage('in-app-push', false))
  const [notifyViaEmail, setNotifyViaEmail] = React.useState(getBooleanValueFromLocalstorage('notify-via-email', false))
  const [notifyViaSMS, setNotifyViaSMS] = React.useState(getBooleanValueFromLocalstorage('notify-via-sms', false))
  const [notifyInTelegram, setNotifyInTelegram] = React.useState(getBooleanValueFromLocalstorage('notify-via-telegram', false))

  const changeInAppPush = () => {
    setInAppPush(!inAppPush)
    localStorage.setItem('in-app-push', '' + !inAppPush)
  }

  const changeNotifyViaEmail = () => {
    setNotifyViaEmail(!notifyViaEmail)
    localStorage.setItem('notify-via-email', '' + !notifyViaEmail)
  }

  const changeNotifyViaSMS = () => {
    setNotifyViaSMS(!notifyViaSMS)
    localStorage.setItem('notify-via-sms', '' + !notifyViaSMS)
  }

  const changeNOtifyViaTelegram = () => {
    setNotifyInTelegram(!notifyInTelegram)
    localStorage.setItem('notify-via-telegram', '' + !notifyInTelegram)
  }

  return (
    <>
      <div className='popup__row popup__row--title'>
        <div
          className='popup__btn popup__btn--back'
          onClick={() => goTo('settings')}
        ></div>
        <div className='popup__title'>Настроить уведомления</div>
        <button
          className='popup__btn popup__btn--close'
          onClick={close}
        ></button>
      </div>
      <div className='popup__row popup__row--profile'>
        <div className='profile profile--settings'>
          <div className='profile__container'>
            <div className='profile__header'>
              <div className='profile__header-title profile__header-title--space-around'>О&nbsp;скидках и&nbsp;акциях</div>
            </div>
            <div className='profile__nav profile__nav--small'>
              <label
                className='profile__nav-item'
                htmlFor='profile-push'
              >
                <span>Пуши в&nbsp;приложениях</span>
                <input
                  className='profile__input-checkbox'
                  id='profile-push'
                  type='checkbox'
                  checked={inAppPush}
                  onChange={changeInAppPush}
                />
              </label>
              <label
                className='profile__nav-item profile__nav-item--rows'
                htmlFor='profile-email'
              >
                <span>Письма на&nbsp;почту</span>
                <div className='profile__nav-descr'>Сначала укажите её&nbsp;в&nbsp;настройках</div>
                <input
                  className='profile__input-checkbox'
                  id='profile-email'
                  type='checkbox'
                  checked={notifyViaEmail}
                  onChange={changeNotifyViaEmail}
                />
              </label>
              <label
                className='profile__nav-item'
                htmlFor='profile-sms'
              >
                <span>СМС</span>
                <input
                  className='profile__input-checkbox'
                  id='profile-sms'
                  type='checkbox'
                  checked={notifyViaSMS}
                  onChange={changeNotifyViaSMS}
                />
              </label>
              <label
                className='profile__nav-item profile__nav-item--rows'
                htmlFor='profile-telegram'
              >
                <span>Telegram</span>
                <div className='profile__nav-descr'>Ваш номер&nbsp;+7 (912) 345-670-89</div>
                <input
                  className='profile__input-checkbox'
                  id='profile-telegram'
                  type='checkbox'
                  checked={notifyInTelegram}
                  onChange={changeNOtifyViaTelegram}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

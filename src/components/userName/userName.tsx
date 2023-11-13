// import arrow from '../../assets/usernameAssets/Vector 1 (Stroke).svg';
import { useEffect, useState } from 'react';
// import profileRegister from '../../assets/usernameAssets/profilePicture.svg';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../uilse/context/ThemContext';
import { User } from '../../uilse/user';
import { useUserContext } from '../../uilse/context/userContext';

type Props = {
  user: User;
};

export function Username({ user }: Props) {
  const { changeUser } = useUserContext();
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const words = user.username.split(' ');
  const initials = words.map((word) => word.charAt(0));
  const initialsString = initials.join('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);

  const [focused, setFocused] = useState(false);
  const [mountFocused, setMountFocused] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleFocus = () => {
    setFocused(true);
  };
  const handleDisfocus = () => {
    setFocused(false);
  };

  const handleExit = () => {
    changeUser({
      username: '',
      email: '',
      password: '',
      films: [],
    });
    navigate('/authorize');
  };

  useEffect(() => {
    for (const key in user) {
      const value = user[key as keyof User];
      if (value !== '' && !(Array.isArray(value) && value.length === 0)) {
        setIsUser(false);
        return;
      }
    }
    setIsUser(true);
  }, [user]);

  useEffect(() => {
    if (clicked && !mounted) {
      setMounted(true);
    } else if (!clicked && mounted) {
      let timer = setTimeout(() => {
        setMounted(false);
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [clicked]);

  useEffect(() => {
    if (focused && !mountFocused) {
      setMountFocused(true);
    } else if (!focused && mountFocused) {
      let timer = setTimeout(() => {
        setMountFocused(false);
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [focused]);

  return (
    <div className=''>
      {isUser ? (
        <div className=''>
          {mountFocused && (
            <div
              className=''
              onPointerEnter={handleFocus}
              onPointerLeave={handleDisfocus}
              onClick={() => navigate('/authorize')}
            >
              Enter to the account
            </div>
          )}
          <div
            className=''
            onPointerEnter={handleFocus}
            onPointerLeave={handleDisfocus}
          >
            <img className='' src='' alt='registr' />
          </div>
        </div>
      ) : null}
      {isUser ? null : (
        <div className=''>
          <div className=''>{initialsString}</div>
          <div className=''>{user.username}</div>
        </div>
      )}
      {isUser ? null : (
        <div className='' onClick={handleClick}>
          <img className='' src='' />
          {mounted && (
            <div className=''>
              <div className='' onClick={handleExit}>
                Exit
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

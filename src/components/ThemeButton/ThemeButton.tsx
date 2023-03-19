import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  if (theme === 'dark') {
    return (
      <button
        className="bg-white w-[30px] h-[30px] flex justify-center items-center rounded-full"
        onClick={() => setTheme('light')}
      >
        <FiSun className="text-black" />
      </button>
    )
  }

  if (theme === 'light') {
    return (
      <button
        className="bg-black w-[30px] h-[30px] flex justify-center items-center rounded-full"
        onClick={() => setTheme('dark')}
      >
        <FiMoon className="text-white" />
      </button>
    )
  }
}

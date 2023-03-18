import { useTheme } from 'next-themes'

export function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="border border-color p-4 flex flex-col gap-2 w-[300px] justify-start items-start">
      <p className="text-color">The current theme is: {theme}</p>
      <button
        className="text-color border border-color p-2"
        onClick={() => setTheme('light')}
      >
        Light Mode
      </button>
      <button
        className="text-color border border-color p-2"
        onClick={() => setTheme('dark')}
      >
        Dark Mode
      </button>
    </div>
  )
}

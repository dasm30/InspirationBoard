import dynamic from 'next/dynamic'

const ResponsiveLayoutNoSSR = dynamic(
  () => import('containers/ResponsiveLayout'),
  {
    ssr: false,
  }
)
export default ResponsiveLayoutNoSSR

import { Grid2, Stack } from '@mui/material'
import { useDeviceType } from '@/hooks'
import { Title } from '@/components'
import { Project, OpenProjectDetails } from '@/pages/Projects/components'
import { projects } from '@/_mocks'

const Projects: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <Stack id='projects' spacing={2} mx={deviceType === 'mobile' ? 2 : 6} mt={8} flex={1}>
      <Stack ml={deviceType === 'mobile' ? 0 : 3} >
        <Title title="projetos" subtitle="projetos" />
      </Stack>

      <Grid2 container py={deviceType === 'mobile' ? 3 : 5} spacing={deviceType === 'mobile' ? 2 : 4}>
        {projects.map(project => (
          <Grid2 key={project.title} size={{ xs: 12, sm: 12, md: 6 }}  display='flex'>
            <Project project={project} />
          </Grid2>
        ))}
      </Grid2>

      <OpenProjectDetails />

      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Susu Barbearia</SwiperSlide>
        <SwiperSlide>Girls Of Cars</SwiperSlide>
        <SwiperSlide>Toledo Bus</SwiperSlide>
        <SwiperSlide>Gestão Varzea</SwiperSlide>
      </Swiper> */}
    </Stack>
  )
}

export default Projects

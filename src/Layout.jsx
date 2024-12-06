import Banner from "./section/Banner"
import Footer from "./section/Footer"
import Header from "./section/Header"
import TaskTable from "./section/task-table/TaskTable"



function Layout() {
  return (
    <>
      <Header />
      <Banner />
      <TaskTable />
      <Footer />
    </>
  )
}

export default Layout
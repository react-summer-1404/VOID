// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Trash,
  Download,
  MoreVertical,
  BookOpen,
  Calendar,
  DollarSign,
  Save,
  Info,
  PieChart,
  TrendingUp,
  CheckCircle,
  ArrowDownCircle,
  EyeOff,
  Delete,
  CloudOff
} from 'react-feather'



// ** Table columns
export const columns = [

  {
    name: 'عنوان ',
    sortable: true,
    minWidth: '250px',
    sortField: 'title',
    selector: row => row.googleTitle, 
    cell: row => {
      return (
        <div className='d-flex flex-column'>
          <h6 className='user-name text-truncate mb-0'>{row.googleTitle}</h6>
        </div>
      )
    }
  },
  
  {
    name: 'عدد دسته بندی ',
    sortable: true,
    minWidth: '300px',
    sortField: 'title',
    selector: row => row.id, 
    cell: row => {
      return (
        <div className='d-flex flex-column'>
          <h6 className='user-name text-truncate mb-0'>{row.id}</h6>
        
        </div>
      )
    }
  },
  
  {
    name: 'نام دسته بندی',
    sortable: true,
    minWidth: '250px',
    sortField: 'title',
    selector: row => row.categoryName, 
    cell: row => {
      return (
        <div className='d-flex flex-column'>
          <h6 className='user-name text-truncate mb-0'>{row.categoryName}</h6>
        </div>
      )
    }
  },
  
  {
    sortable: true,
    minWidth: '150px',
    name: 'آخرین ابدیت',
    sortField: 'startTime',
    selector: row => row.insertDate,  
    cell: row => {
      const date = new Date(row.insertDate)
      return date.toLocaleDateString('fa-IR')
    }
  },
  {
    name: 'عملیات',
    minWidth: '110px',
    cell: row => {
       let status = 'Inactive'
      if (row.isActive && !row.isExpire) {
        status = 'Active'
      } else if (row.isExpire) {
        status = 'Expired'
      }if(row.isDelete){
        status = 'Deleted'
      }
      
      return(
      <div className='column-action d-flex align-items-center'>
       
       
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          
          <DropdownMenu end>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>ویراش اخبار</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/course/edit/${row.courseId}`} className='w-100'>
              <Trash size={14} className='me-50' />
              <span className='align-middle'>{status === 'Deleted' ? 'بازگرداندن اخبار' :'حذف اخبار'}</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteCourse(row.courseId))
              }}
            >
              <CloudOff size={14} className='me-50' />
              <span className='align-middle'>{status === 'Expired' ? 'غیر منقضی کردن اخبار' :'منقضی کردن اخبار'}</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Delete size={14} className='me-50' />
              <span className='align-middle'>{status === 'Active' ? 'غیر فعال کردن' :'فعال کردن'}</span>
            </DropdownItem>
            
          </DropdownMenu>
          
        </UncontrolledDropdown>
        
      </div>
     )
   }
  }
]
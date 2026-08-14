import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'lucide-react'
import { NavLink } from '@/components/layout/NavLink'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NAV_LINKS } from '@/lib/constants'
import {
  closeMobileNav,
  openMobileNav,
  selectMobileNavOpen,
} from '@/features/ui/uiSlice'

export function MobileNav() {
  const open = useSelector(selectMobileNavOpen)
  const dispatch = useDispatch()

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        dispatch(next ? openMobileNav() : closeMobileNav())
      }}
    >
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ll-header__menu-trigger"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent title="Menu">
        <nav className="ll-mobile-nav" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              variant="mobile"
              onClick={() => dispatch(closeMobileNav())}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

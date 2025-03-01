import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiEnvelope,
  HiLockClosed,
  HiUser,
  HiArrowRight,
  HiArrowLeft,
  HiArrowUp,
  HiArrowDown,
  HiClock,
  HiStar,
  HiHeart,
  HiHome,
  HiCog6Tooth,
  HiUserCircle,
  HiPencil,
  HiTrash,
  HiGlobeAlt,
  HiBookmark,
  HiShoppingCart,
  HiBell,
  HiChatBubbleLeftRight,
  HiMapPin,
  HiQuestionMarkCircle,
  HiShieldCheck,
} from "react-icons/hi2";

import { RiVisaLine } from "react-icons/ri";

import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa6";

export type IconName = 
  | 'chevron-down'
  | 'check'
  | 'plus'
  | 'x-mark'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'search'
  | 'mail'
  | 'lock'
  | 'user'
  | 'exclamation-circle'
  | 'information-circle'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'arrow-down'
  | 'calendar'
  | 'clock'
  | 'star'
  | 'heart'
  | 'home'
  | 'cog'
  | 'user-circle'
  | 'pencil'
  | 'trash'
  | 'eye'
  | 'eye-slash'
  | 'globe'
  | 'link'
  | 'bookmark'
  | 'cart'
  | 'moon'
  | 'sun'
  | 'bell'
  | 'chat'
  | 'map-pin'
  | 'question-mark'
  | 'shield-check'
  | 'sparkles'
  | 'refresh'
  | 'check-circle'
  | 'eye-dropper'
  | 'clipboard'
  | 'person'
  | 'close'
  | 'open-link'
  | 'discord'
  | 'google'
  | 'github'
  | 'arrow-up-right'
  | 'minus'
  | 'visa'
  | 'security';

export const iconLibrary: Record<string, IconType> = {
  'chevron-down': HiChevronDown,
  'check': HiCheck,
  'plus': HiMiniPlus,
  'x-mark': HiMiniXMark,
  'chevron-up': HiChevronUp,
  'chevron-left': HiChevronLeft,
  'chevron-right': HiChevronRight,
  'search': HiOutlineMagnifyingGlass,
  'mail': HiEnvelope,
  'lock': HiLockClosed,
  'user': HiUser,
  'exclamation-circle': HiExclamationCircle,
  'information-circle': HiInformationCircle,
  'arrow-right': HiArrowRight,
  'arrow-left': HiArrowLeft,
  'arrow-up': HiArrowUp,
  'arrow-down': HiArrowDown,
  'calendar': HiCalendar,
  'clock': HiClock,
  'star': HiStar,
  'heart': HiHeart,
  'home': HiHome,
  'cog': HiCog6Tooth,
  'user-circle': HiUserCircle,
  'pencil': HiPencil,
  'trash': HiTrash,
  'eye': HiOutlineEye,
  'eye-slash': HiOutlineEyeSlash,
  'globe': HiGlobeAlt,
  'link': HiOutlineLink,
  'bookmark': HiBookmark,
  'cart': HiShoppingCart,
  'moon': HiOutlineMoon,
  'sun': HiOutlineSun,
  'bell': HiBell,
  'chat': HiChatBubbleLeftRight,
  'map-pin': HiMapPin,
  'question-mark': HiQuestionMarkCircle,
  'shield-check': HiOutlineShieldCheck,
  'sparkles': HiOutlineSparkles,
  'refresh': HiOutlineArrowPath,
  'check-circle': HiCheckCircle,
  'eye-dropper': HiEyeDropper,
  'clipboard': HiOutlineClipboard,
  'person': HiMiniUser,
  'close': HiMiniXMark,
  'open-link': HiOutlineLink,
  'discord': FaDiscord,
  'google': FaGoogle,
  'github': FaGithub,
  'arrow-up-right': HiArrowUpRight,
  'minus': HiMiniMinus,
  'visa': RiVisaLine,
  'security': HiOutlineShieldCheck
};

import { UserRepository } from './user-repository'
import { UserSessionRepository } from './user-session-repository'
import { ClientRepository } from './client-repository'
import { TechnicianRepository } from './technician-repository'
import { TeamRepository } from './team-repository'
import { TeamMemberRepository } from './team-member-repository'
import { ServiceOrderRepository } from './service-order-repository'
import { OrderMessageRepository } from './order-message-repository'
import { OrderActivityRepository } from './order-activity-repository'
import { ScheduleRepository } from './schedule-repository'
import { FinancialTransactionRepository } from './financial-transaction-repository'
import { MfaSettingRepository } from './mfa-setting-repository'

export {
	UserRepository,
	UserSessionRepository,
	ClientRepository,
	TechnicianRepository,
	TeamRepository,
	TeamMemberRepository,
	ServiceOrderRepository,
	OrderMessageRepository,
	OrderActivityRepository,
	ScheduleRepository,
	FinancialTransactionRepository,
	MfaSettingRepository,
}

export const userRepository = new UserRepository()
export const userSessionRepository = new UserSessionRepository()
export const clientRepository = new ClientRepository()
export const technicianRepository = new TechnicianRepository()
export const teamRepository = new TeamRepository()
export const teamMemberRepository = new TeamMemberRepository()
export const serviceOrderRepository = new ServiceOrderRepository()
export const orderMessageRepository = new OrderMessageRepository()
export const orderActivityRepository = new OrderActivityRepository()
export const scheduleRepository = new ScheduleRepository()
export const financialTransactionRepository = new FinancialTransactionRepository()
export const mfaSettingRepository = new MfaSettingRepository()

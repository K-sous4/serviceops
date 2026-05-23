import React from 'react'

type Props = {
  fullName: string
  role: string
  email: string
  action: (formData: FormData) => void
}

export default function PersonalInfoCard({ fullName, role, email, action }: Props) {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <form action={action}>
        <div className="flex items-center justify-between mb-lg">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">person_edit</span>
            <h3 className="font-headline-sm text-headline-sm text-primary">Personal Information</h3>
          </div>
          <button type="submit" className="bg-primary text-on-primary px-sm py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>
        <div className="flex items-start gap-lg mb-lg">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-low">
              <img
                alt="Avatar"
                className="w-full h-full object-cover"
                data-alt="A close-up shot of a professional male operations manager with a friendly smile, shot in a high-key studio setting. The lighting is bright and even, highlighting a sophisticated and authoritative look suited for an enterprise software user profile. The color palette is composed of crisp whites and deep slates."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdzcscvQyJnQar6e7xA0NBhIqfvCH9W6Q8Jpx-VMB7Ku4WuOQfBha3k5K-2kIbguOnRZgClVMYat-Wf9eZNdNggquwb4mzED8qJ1af1HvKOJ3pX-dKJ7s-bBK8tNCPAKV52XaULHlzKfDYi47ev8O0Dr47Nvotd8ImqSlWcSH3NeyIxjfAq-97KoQ__MlH3xRon-zVOEZqZLrVCyBYy5HszAEILCagV1OUKfs0Tw1upf_b7cB_fL_Jhjuv3izwXJCaBlbuIW9UyVi"
              />
            </div>
            <label className="absolute inset-0 flex items-center justify-center bg-primary/40 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
              <span className="material-symbols-outlined">photo_camera</span>
              <input className="hidden" type="file" />
            </label>
          </div>
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-sm">
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
              <input
                className="w-full border border-outline-variant rounded-lg px-4 py-2 text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                type="text"
                name="fullName"
                defaultValue={fullName}
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">Role</label>
              <input
                className="w-full border border-outline-variant bg-surface-container-low rounded-lg px-4 py-2 text-body-md opacity-70 cursor-not-allowed"
                readOnly
                type="text"
                name="role"
                defaultValue={role}
              />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
              <input
                className="w-full border border-outline-variant rounded-lg px-4 py-2 text-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                type="email"
                name="email"
                defaultValue={email}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

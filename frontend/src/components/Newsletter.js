import React from 'react'
import { UserPlus } from 'lucide-react';


const Newsletter = () => {
  return (
    <div className="newsletter-block">
        <h2 className="section-title text-center mb-4">Get latest posts delivered right to your inbox</h2>
        <form action="#!" method="post" noValidate>
            <div className="input-group flex-column flex-sm-row flex-nowrap flex-sm-nowrap">
                <input type="email" name="email" className="form-control required email w-auto text-center text-sm-start" placeholder="Your email address" aria-label="Subscription" required />
                <div className="input-group-append d-flex d-sm-inline-block mt-2 mt-sm-0 ms-0 w-auto">
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="input-group-text w-100 justify-content-center align-items-center gap-2" aria-label="Subscription Button">
                    <UserPlus size={16} strokeWidth={1.5} /> Join today
                </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Newsletter

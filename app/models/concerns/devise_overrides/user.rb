module DeviseOverrides
  module User
    # instead of deleting,
    # indicate the user requested a delete & timestamp it
    def soft_delete
      update_attribute(:deleted_at, Time.current)
    end

    # ensure user account is active
    def active_for_authentication?
      super && !deleted_at
    end

    # provide a custom message for a deleted account
    def inactive_message
      !deleted_at ? super : :deleted_account
    end
  end
end

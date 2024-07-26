FactoryBot.define do
  factory :author do
    name { '山田太郎' }
    birth_year { '1970' }
    death_year { nil }
    profession { '著者' }
  end
end

import { equal } from 'assert';


describe('tests', ()=>{
    it('Set Country in Views/Auto Complete/ 1. Screen Top', async ()=>{
        await $('//*[@content-desc="Views"]').click()
        await $('//*[@content-desc="Auto Complete"]').click()
        await $('//*[@content-desc="1. Screen Top"]').click()
        await $('//*[@resource-id="io.appium.android.apis:id/edit"]').setValue("Ukraine")
        const country = await $('//*[@resource-id="io.appium.android.apis:id/edit"]').getText()
        
        equal(country, 'Ukraine')

        await $('/hierarchy/android.widget.FrameLayout').back()
        await $('/hierarchy/android.widget.FrameLayout').back()
    })
    it('Check toggle button in Views/Buttons', async ()=>{
        await $('//*[@content-desc="Buttons"]').click()

        buttonState = await $('//android.widget.ToggleButton[@content-desc="Toggle"]').getChecked()
        ok(!buttonState)

        await $('//android.widget.ToggleButton[@content-desc="Toggle"]').click()
        buttonState = await $('//android.widget.ToggleButton[@content-desc="Toggle"]').getChecked()
        ok(buttonState)
        
        await $('/hierarchy/android.widget.FrameLayout').back()
    })
    it('Check "selected" in Views/Radio Group', async ()=>{
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]').swipe(75,2000,75,500)
        await $('//*[@content-desc="Radio Group"]').click()

        selected = await $('//*[@content-desc="You have selected: (none)"]').getText()
        equal(selected, "You have selected: 2131296544")

        await $('//*[@content-desc="Clear"]').click()
        selected = await $('//*[@content-desc="You have selected: (none)"]').getText()
        equal(selected, "You have selected: (none)")

        await $('//*[@resource-id="io.appium.android.apis:id/snack"]').click()
        selected = await $('//*[@content-desc="You have selected: (none)"]').getText()
        equal(selected, 'You have selected: 2131296728')
    })
})
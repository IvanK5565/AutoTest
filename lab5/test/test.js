import { equal, ok } from 'assert';

describe('tests', ()=>{
    it('Set Country in Views/Auto Complete/ 1. Screen Top', async ()=>{
        await $('//*[@content-desc="Views"]').click()
        await $('//*[@content-desc="Auto Complete"]').click()
        await $('//*[@content-desc="1. Screen Top"]').click()
        await $('//*[@resource-id="io.appium.android.apis:id/edit"]').setValue("Ukraine")
        const country = await $('//*[@resource-id="io.appium.android.apis:id/edit"]').getText()
        
        equal(country, 'Ukraine')
    })
    it('Check "selected" in Views/Controls/1. Light Theme', async ()=>{
        await $('/hierarchy/android.widget.FrameLayout').back()
        await $('/hierarchy/android.widget.FrameLayout').back()

        await $('//*[@content-desc="Controls"]').click()
        await $('//*[@content-desc="1. Light Theme"]').click()

        let checked = await $('//android.widget.CheckBox[@content-desc="Checkbox 1"]').getAttribute('checked')
        equal(checked, 'false')

        await $('//android.widget.CheckBox[@content-desc="Checkbox 1"]').click()
        checked = await $('//android.widget.CheckBox[@content-desc="Checkbox 1"]').getAttribute('checked')
        equal(checked,'true')
    })
    it('Check toggle button in Views/Buttons', async ()=>{
        await $('/hierarchy/android.widget.FrameLayout').back()
        await $('/hierarchy/android.widget.FrameLayout').back()

        await $('//*[@content-desc="Buttons"]').click()

        let buttonState = await $('//android.widget.ToggleButton[@content-desc="Toggle"]').getAttribute('checked')
        equal(buttonState, 'false')

        await $('//android.widget.ToggleButton[@content-desc="Toggle"]').click()
        buttonState = await $('//android.widget.ToggleButton[@content-desc="Toggle"]').getAttribute('checked')
        equal(buttonState,'true')
        
        await $('/hierarchy/android.widget.FrameLayout').back()
    })
})